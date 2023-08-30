import clsx from "clsx";
import _ from "lodash";
import { useRef, useState } from "react";

import { SvgIconComponent } from "@mui/icons-material";
import { Box, Divider, Stack, Typography, alpha, useMediaQuery, useTheme } from "@mui/material";

import { UploadSymbolIcon } from "../../../icons";

import { Link } from "../../Buttons";
import { ProgressBar } from "../../General";
import InlineMessage from "../../General/Messages/InlineMessage";
import { eContentType } from "../FileViewer/FileViewer";

//--------------------------------------------------------------------------------------------------------
export interface YFileUploaderProps { 
   uploadUrl:string;
   /**
   * Define the type of the files that you want to allow uploading
   */
  supportedTypes: eContentType[];

  /**
   * Max allowed size limit for the file uploading in MB
   */
  maxAllowedSize: number; //Default 10 MB

  /**
   * Hide/Show choose file button
   * Default true (Show)
   */
  showChooseFileButton?: boolean;

  /**
   * Define drag and drop info label
   */
  dragAndDropInfoLabel:  string;

  /**
   * Define Browse info label
   */
  browseInfoLabel: string;

  /**
   * Define inline default error message
   */
  errorMsg: string;

  /**
   * Define a loading icon file
   */
  loadingIcon: SvgIconComponent;

  disabled?: boolean;

  onUploadComplete: ({
    isSuccess,
    resource,
  }: {
    isSuccess: boolean;
    resource?:  any | null;
  }) => void;

  onUploadStart: (hasStarted: boolean) => void;
}

export default function YFileUploader({
  uploadUrl,
  supportedTypes,
  maxAllowedSize,
  showChooseFileButton = true,
  dragAndDropInfoLabel,
  browseInfoLabel,
  loadingIcon: LoadingIcon,
  errorMsg,
  disabled,
  onUploadComplete,
  onUploadStart,
}: YFileUploaderProps) {
  const theme = useTheme();
  const isMobile  = useMediaQuery(theme.breakpoints.down('sm'));
  const inputRef = useRef(null);

  const [dragActive, setDragActive] = useState(false);
  const [uploadStarted, setUploadStarted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [fileName, setFilename] = useState<string>();

  //---------------------------------------------------------------------------
  const handleOpenFileSelection = () => {
    if (!_.isNil(inputRef) && !_.isNil(inputRef.current)) {
      (inputRef.current as HTMLDivElement).click();
    }
  };
  //---------------------------------------------------------------------------
  const handleFileChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      let file: File = event.target.files[0];
      handleStartFileUploading(file);
    }
  };
  //----------------------------------------------------------------------------
  const handleStartFileUploading = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    let headers = {
      Authorization: '',
    };

    // check file size (< maxAllowedSize MB)
    if (file.size > maxAllowedSize * 1024 * 1024) {
      return;
    }
    setHasError(false);
    setUploadStarted(true);
    setFilename(file.name);
    onUploadStart(true);

    /**
     * Map file type to content type
     */
    let contentType: null | eContentType = null;
    switch (file.type) {
      case "image/jpeg":
      case "image/png":
        contentType = eContentType.Image;
        break;
      case "application/pdf":
        contentType = eContentType.Pdf;
        break;
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        contentType = eContentType.OfficeDocument;
        break;
      case "image/svg+xml":
        contentType = eContentType.VectorGraphics;
        break;
      case "text/plain":
        contentType = eContentType.Text;
        break;
      case "text/markdown":
        contentType = eContentType.Md;
        break;
      case "application/octet-stream":
        contentType = eContentType.Bin;
        break;
      case "application/x-zip-compressed":
        contentType = eContentType.Zip;
        break;
    }

    if (_.isNull(contentType)) {
      let fileSuffix = file.name.split(".").pop();
      /**
       * parse name
       */
      switch (fileSuffix) {
        case "png":
        case "jpg":
          contentType = eContentType.Image;
          break;
        case "pdf":
          contentType = eContentType.Pdf;
          break;
        case "pptx":
        case "docx":
          contentType = eContentType.OfficeDocument;
          break;
        case "svg":
          contentType = eContentType.VectorGraphics;
          break;
        case "txt":
          contentType = eContentType.Text;
          break;
        case "md":
          contentType = eContentType.Md;
          break;
        case "bin":
          contentType = eContentType.Bin;
          break;
        case "zip":
          contentType = eContentType.Zip;
          break;
      }
    }

    fetch(
       uploadUrl,
      {
        method: "POST",
        body: formData,
        headers: headers,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        onUploadComplete({
          isSuccess: result.IsSuccess,
          resource: {
            id: result.ResourceId,
            contentTypeEnum: contentType as eContentType,
            name: file.name,
          },
        });
        setUploadStarted(false);
      })
      .catch((error) => {
        onUploadComplete({
          isSuccess: false,
          resource: null,
        });
        setUploadStarted(false);
        setHasError(true);
      });
  };
  //---------------------------------------------------------------------------
  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  //---------------------------------------------------------------------------
  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      let file: File = e.dataTransfer.files[0];
      handleStartFileUploading(file);
    }
  };
  //---------------------------------------------------------------------------
  let supportedFileTypes: string[] = [];
  _.forEach(_.uniq(supportedTypes), (type) => {
    switch (type) {
      case eContentType.Text: {
        supportedFileTypes.push("txt");
        break;
      }
      case eContentType.Image: {
        let newItems = ["png", "jpg"];
        supportedFileTypes.push(...newItems);
        break;
      }
      case eContentType.Pdf: {
        supportedFileTypes.push("pdf");
        break;
      }
      case eContentType.VectorGraphics: {
        supportedFileTypes.push("svg");
        break;
      }
      case eContentType.Bin: {
        supportedFileTypes.push("bin");
        break;
      }
      case eContentType.Md: {
        supportedFileTypes.push("md");
        break;
      }
      case eContentType.Zip: {
        supportedFileTypes.push("zip");
        break;
      }
      case eContentType.OfficeDocument: {
        let newItems = ["docx"];
        supportedFileTypes.push(...newItems);
        break;
      }
    }
  });
  //------------------------------------------------------------------------------
  const ORElement = (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Divider sx={{ width: "104px", height: "1px", color: "grey.400" }} />
      <Typography
        variant="overline"
        component="div"
        sx={{ color: "grey.600", ml: 1, mr: 1 }}
      >
        OR
      </Typography>
      <Divider sx={{ width: "104px", height: "1px", color: "grey.400" }} />
    </Stack>
  );

  const BrowseElement = showChooseFileButton ? (
    <Link
      disabled={disabled}
      label={browseInfoLabel}
      onClick={handleOpenFileSelection}
      sx={{ mb: 3 }}
    />
  ) : null;

  const InfoMessagesElement = isMobile ? (
    <Stack sx={{ display: "flex", alignItems: "center", mb: hasError ? 1 : 0 }}>
      <Typography component="div">
        {`Supported files: ${supportedFileTypes.join(", ")}`}
      </Typography>
      <Typography component="div">
        {`Total max size: ${maxAllowedSize}MB`}
      </Typography>
    </Stack>
  ) : (
    <Typography
      component="div"
      sx={{ display: "flex", alignItems: "center", mb: hasError ? 1 : 0 }}
    >
    {`Supported files: ${supportedFileTypes.join(", ")} / Total max size: ${maxAllowedSize} MB`},
    </Typography>
  );

  const ErrorMessageElement = hasError ? (
    <InlineMessage variant="error" label={errorMsg} />
  ) : null;

  const MessagesAreaElement = (
    <Stack
      sx={{
        mt: isMobile ? 2 : 3,
        mb: isMobile ? (hasError ? 1 : "56px") : hasError ? 1 : "48px",
        alignItems: "center",
        width: "100%",
      }}
    >
      {BrowseElement}
      {InfoMessagesElement}
      {ErrorMessageElement}
    </Stack>
  );

  const LoadingElement = (
    <Stack
      className={clsx({ isDisabled: disabled })}
      sx={{
        width: "calc(100% - 32px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <LoadingIcon
        sx={{
          marginRight: 3,
          height: "80px",
          width: "80px",
          color: "common.brandColor.300",
        }}
        viewBox="0 0 80 80"
        fill="none"
      />
      <Typography
        component="div"
        variant="body2"
        sx={{
          mt: 3,
          mb: "10px",
          color: "grey.900",
        }}
      >
        {fileName}
      </Typography>
      <Box width="100%">
        <ProgressBar variant="indeterminate" />
      </Box>
    </Stack>
  );

  const UploadingElement = (
    <Stack
      sx={{
        width: "calc(100% - 32px)",
        display: "flex",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <UploadSymbolIcon
        sx={{
          marginTop: isMobile ? 2 : 3,
          height: "80px",
          width: "80px",
          color: disabled ? "common.disabled" : "common.brandColor.300",
        }}
        viewBox="0 0 80 80"
        fill="none"
      />

      {!isMobile && (
        <>
          <Typography
            component="div"
            variant="body2"
            sx={{
              color: "grey.900",
              margin: "auto",
              textAlign: "center",
              mt: 3,
              mb: 3,
            }}
          >
            {dragAndDropInfoLabel}
          </Typography>
          {ORElement}
        </>
      )}

      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        accept={supportedFileTypes.join(",")}
        onChange={handleFileChange}
      />

      {MessagesAreaElement}
    </Stack>
  );

  return (
    <Box
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      className={clsx({
        isDragging: dragActive,
      })}
      sx={{
        width: "100%",
        height: "initial",
        borderRadius: "8px",
        border: "1px dashed",
        borderColor: !disabled
          ? hasError
            ? "common.messages.dark.error"
            : "common.brandColor.300"
          : "common.disabled",
        bgcolor: (theme) => alpha(theme.palette.primary.light, 0.32),
        display: "flex",
        justifyContent: "center",
        "&.MuiBox-root": {
          "&.isDragging": {
            //todo add styles on drag
          },
        },
      }}
    >
      {!uploadStarted ? UploadingElement : LoadingElement}
    </Box>
  );
}
