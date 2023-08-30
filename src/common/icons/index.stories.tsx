import { Meta, Story } from '@storybook/react';

import { Box, Grid, Typography } from '@mui/material';

import {
    AAcousticsIcon,
    AddAttachmentIcon,
    AddDevicesIcon,
    AddFiltersIcon,
    AddFloorIcon,
    AddIcon,
    AddIncidentIcon,
    AddLinkIcon,
    AddRowIcon,
    AddRuleIcon,
    AddTagsIcon,
    AddZoneIcon,
    AdminIcon,
    AirQualityIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    AscendingIcon,
    AttachmentIcon,
    BackIcon,
    BasketIcon,
    BoardIcon,
    BookDeskIcon,
    BuildingsLargeIcon,
    BuildingsSmallIcon,
    CSVIcon,
    CalendarIcon,
    CalendarTimeIcon,
    CheckboxIcon,
    CheckboxSelectedIcon,
    CheckboxUnselectedIcon,
    ClockIcon,
    CloseLargeIcon,
    CloseSmallIcon,
    CollapseIcon,
    CollapsedAreaIcon,
    ColumnsIcon,
    ComparisonDownIcon,
    ComparisonUpIcon,
    ConnectivityHistoryIcon,
    ConnectivityIcon,
    CurrentDayIcon,
    CustomVirtualIcon,
    DataIcon,
    DeleteIcon,
    DescendingIcon,
    DeviceGroupsIcon,
    DevicesLargeIcon,
    DevicesSmallIcon,
    DropdownCloseIcon,
    DropdownNoResultIcon,
    DropdownOpenIcon,
    DryContactsSensorIcon,
    EditIcon,
    EnergyMeterIcon,
    EnvironmentalSensorIcon,
    ErrorLargeIcon,
    ErrorSmallIcon,
    ExpandIcon,
    ExpandedAreaIcon,
    ExportIcon,
    ExtendIcon,
    AddFileIcon,
    FileIcon,
    FiltersIcon,
    FloorsLargeIcon,
    FloorsSmallIcon,
    FolderIcon,
    FullIcon,
    GatewayDevicesIcon,
    GatewayIcon,
    HumidityIcon,
    ISOActionItemsIcon,
    ISOAuditsIcon,
    ISOIcon,
    ISOKPIIcon,
    ISOProcessIcon,
    ISORisksIcon,
    ISOTrainingIcon,
    IncidentsIcon,
    IncidentsListIcon,
    InfoLargeIcon,
    InfoSmallIcon,
    InfrastructureIcon,
    LightingIcon,
    LinkIcon,
    ListViewIcon,
    LocationIcon,
    LogIcon,
    LogoutIcon,
    MeasurementsIcon,
    MenuCloseIcon,
    MenuIcon,
    MoreIcon,
    MorePagesIcon,
    NarrowIcon,
    NextIcon,
    NoDataIcon,
    NoTasksIcon,
    OfflineIcon,
    OrganizationIcon,
    PDFIcon,
    ParkingCameraIcon,
    PeopleCountingCameraIcon,
    PinIcon,
    PlcControllerIcon,
    PointIcon,
    PositionAndAscDescIcon,
    ProfileIcon,
    RawIcon,
    RedirectIcon,
    RemoveFiltersIcon,
    RemoveIcon,
    RemoveLinkIcon,
    RemovePositionIcon,
    RemoveTagsIcon,
    ReportingIcon,
    RowPositionIcon,
    RulesIcon,
    SaveIcon,
    SearchIcon,
    SelectionIcon,
    SeverityIcon,
    StickyIcon,
    SuccessLargeIcon,
    SuccessSmallIcon,
    TagsIcon,
    TagsManagementIcon,
    ThermometerIcon,
    TreeCloseIcon,
    TreeIcon,
    TreeOpenIcon,
    UserManagementIcon,
    WarningLargeIcon,
    WarningSmallIcon,
    WeatherIcon,
    XLSIcon,
    YodiDeskAnalyticsIcon,
    YodiDeskGroupsIcon,
    YodiDeskIcon,
    YodiDeskManagementIcon,
    YodiDeskMyBookingIcon,
    YodiDeskOverviewIcon,
    YodiDeskRestrictionIcon,
    YodiSafeIcon,
    YodiSenseBillsMgmtIcon,
    YodiSenseDynamicMonIcon,
    YodiSenseIcon,
    YodiSenseInsightsIcon,
    YodiSenseTrendsIcon,
    YodiSpaceIcon,
    YodiTaskIcon,
    ZonesLargeIcon,
    ZonesSmallIcon,
    ZoomInIcon,
    ZoomOutIcon,
    ZIPIcon,
    TXTIcon,
    MDIcon,
    HTMLIcon,
    DOCIcon,
} from './index';

const GridIcon = ({ children, name }: { children: JSX.Element; name: string }) => {
    return (
        <Grid
            container
            item
            xs={2}
            spacing={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item>{children}</Grid>
            <Grid item>
                <Typography variant="body2">{name}</Typography>
            </Grid>
        </Grid>
    );
};

const Template: Story = (args) => {
    return (
        <Box>
            <Typography
                sx={{
                    pb: 1,
                    mb: 3,
                    borderBottom: '1px solid',
                    borderColor: 'grey.400',
                }}
                variant="h1"
            >
                Icons
            </Typography>
            <Grid container spacing={4} flexDirection="row">
                <GridIcon name="AAcousticsIcon">
                    <AAcousticsIcon />
                </GridIcon>
                <GridIcon name="AddIcon">
                    <AddIcon />
                </GridIcon>
                <GridIcon name="AddAttachmentIcon">
                    <AddAttachmentIcon />
                </GridIcon>
                <GridIcon name="AddDevicesIcon">
                    <AddDevicesIcon />
                </GridIcon>
                <GridIcon name="AddFiltersIcon">
                    <AddFiltersIcon />
                </GridIcon>
                <GridIcon name="AddFloorIcon">
                    <AddFloorIcon />
                </GridIcon>
                <GridIcon name="AddIncidentIcon">
                    <AddIncidentIcon />
                </GridIcon>
                <GridIcon name="AddLinkIcon">
                    <AddLinkIcon />
                </GridIcon>
                <GridIcon name="AddRowIcon">
                    <AddRowIcon />
                </GridIcon>
                <GridIcon name="AddRuleIcon">
                    <AddRuleIcon />
                </GridIcon>
                <GridIcon name="AddTagsIcon">
                    <AddTagsIcon />
                </GridIcon>
                <GridIcon name="AddZoneIcon">
                    <AddZoneIcon />
                </GridIcon>
                <GridIcon name="AirQualityIcon">
                    <AirQualityIcon />
                </GridIcon>
                <GridIcon name="ArrowLeftIcon">
                    <ArrowLeftIcon />
                </GridIcon>
                <GridIcon name="ArrowRightIcon">
                    <ArrowRightIcon />
                </GridIcon>
                <GridIcon name="AscendingIcon">
                    <AscendingIcon />
                </GridIcon>
                <GridIcon name="AttachmentIcon">
                    <AttachmentIcon />
                </GridIcon>
                <GridIcon name="BackIcon">
                    <BackIcon />
                </GridIcon>
                <GridIcon name="BasketIcon">
                    <BasketIcon />
                </GridIcon>
                <GridIcon name="BoardIcon">
                    <BoardIcon />
                </GridIcon>
                <GridIcon name="BookDeskIcon">
                    <BookDeskIcon />
                </GridIcon>
                <GridIcon name="BuildingsLargeIcon">
                    <BuildingsLargeIcon />
                </GridIcon>
                <GridIcon name="BuildingsSmallIcon">
                    <BuildingsSmallIcon />
                </GridIcon>
                <GridIcon name="CalendarIcon">
                    <CalendarIcon />
                </GridIcon>
                <GridIcon name="CalendarTimeIcon">
                    <CalendarTimeIcon />
                </GridIcon>
                <GridIcon name="CheckboxIcon">
                    <CheckboxIcon />
                </GridIcon>
                <GridIcon name="CheckboxUnselectedIcon">
                    <CheckboxUnselectedIcon />
                </GridIcon>
                <GridIcon name="CheckboxSelectedIcon">
                    <CheckboxSelectedIcon />
                </GridIcon>
                <GridIcon name="ClockIcon">
                    <ClockIcon />
                </GridIcon>
                <GridIcon name="CloseLargeIcon">
                    <CloseLargeIcon />
                </GridIcon>
                <GridIcon name="CloseSmallIcon">
                    <CloseSmallIcon />
                </GridIcon>
                <GridIcon name="CollapseIcon">
                    <CollapseIcon />
                </GridIcon>
                <GridIcon name="CollapsedAreaIcon">
                    <CollapsedAreaIcon />
                </GridIcon>
                <GridIcon name="ColumnsIcon">
                    <ColumnsIcon />
                </GridIcon>
                <GridIcon name="ComparisonDownIcon">
                    <ComparisonDownIcon />
                </GridIcon>
                <GridIcon name="ComparisonUpIcon">
                    <ComparisonUpIcon />
                </GridIcon>
                <GridIcon name="ConnectivityIcon">
                    <ConnectivityIcon />
                </GridIcon>
                <GridIcon name="ConnectivityHistoryIcon">
                    <ConnectivityHistoryIcon />
                </GridIcon>
                <GridIcon name="CSVIcon">
                    <CSVIcon />
                </GridIcon>
                <GridIcon name="CurrentDayIcon">
                    <CurrentDayIcon />
                </GridIcon>
                <GridIcon name="CustomVirtualIcon">
                    <CustomVirtualIcon />
                </GridIcon>
                <GridIcon name="DataIcon">
                    <DataIcon />
                </GridIcon>
                <GridIcon name="DeleteIcon">
                    <DeleteIcon />
                </GridIcon>
                <GridIcon name="DescendingIcon">
                    <DescendingIcon />
                </GridIcon>
                <GridIcon name="DeviceGroupsIcon">
                    <DeviceGroupsIcon />
                </GridIcon>
                <GridIcon name="DevicesLargeIcon">
                    <DevicesLargeIcon />
                </GridIcon>
                <GridIcon name="DevicesSmallIcon">
                    <DevicesSmallIcon />
                </GridIcon>
                <GridIcon name="DropdownCloseIcon">
                    <DropdownCloseIcon />
                </GridIcon>
                <GridIcon name="DropdownOpenIcon">
                    <DropdownOpenIcon />
                </GridIcon>
                <GridIcon name="DryContactsSensorIcon">
                    <DryContactsSensorIcon />
                </GridIcon>
                <GridIcon name="EditIcon">
                    <EditIcon />
                </GridIcon>
                <GridIcon name="EnergyMeterIcon">
                    <EnergyMeterIcon />
                </GridIcon>
                <GridIcon name="EnvironmentalSensorIcon">
                    <EnvironmentalSensorIcon />
                </GridIcon>
                <GridIcon name="ErrorLargeIcon">
                    <ErrorLargeIcon />
                </GridIcon>
                <GridIcon name="ErrorSmallIcon">
                    <ErrorSmallIcon />
                </GridIcon>
                <GridIcon name="ExpandIcon">
                    <ExpandIcon />
                </GridIcon>
                <GridIcon name="ExpandedAreaIcon">
                    <ExpandedAreaIcon />
                </GridIcon>
                <GridIcon name="ExportIcon">
                    <ExportIcon />
                </GridIcon>
                <GridIcon name="ExtendIcon">
                    <ExtendIcon />
                </GridIcon>
                <GridIcon name="FiltersIcon">
                    <FiltersIcon />
                </GridIcon>
                <GridIcon name="FloorsLargeIcon">
                    <FloorsLargeIcon />
                </GridIcon>
                <GridIcon name="FloorsSmallIcon">
                    <FloorsSmallIcon />
                </GridIcon>
                <GridIcon name="FullIcon">
                    <FullIcon />
                </GridIcon>
                <GridIcon name="FileIcon">
                    <FileIcon />
                </GridIcon>
                <GridIcon name="FileAddIcon">
                    <AddFileIcon />
                </GridIcon>
                <GridIcon name="FolderIcon">
                    <FolderIcon />
                </GridIcon>
                <GridIcon name="GatewayIcon">
                    <GatewayIcon />
                </GridIcon>
                <GridIcon name="GatewayDevicesIcon">
                    <GatewayDevicesIcon />
                </GridIcon>
                <GridIcon name="HumidityIcon">
                    <HumidityIcon />
                </GridIcon>
                <GridIcon name="InfoLargeIcon">
                    <InfoLargeIcon />
                </GridIcon>
                <GridIcon name="InfoSmallIcon">
                    <InfoSmallIcon />
                </GridIcon>
                <GridIcon name="LightingIcon">
                    <LightingIcon />
                </GridIcon>
                <GridIcon name="LinkIcon">
                    <LinkIcon />
                </GridIcon>
                <GridIcon name="ListViewIcon">
                    <ListViewIcon />
                </GridIcon>
                <GridIcon name="LocationIcon">
                    <LocationIcon />
                </GridIcon>
                <GridIcon name="LogIcon">
                    <LogIcon />
                </GridIcon>
                <GridIcon name="LogoutIcon">
                    <LogoutIcon />
                </GridIcon>
                <GridIcon name="MeasurementsIcon">
                    <MeasurementsIcon />
                </GridIcon>
                <GridIcon name="MenuIcon">
                    <MenuIcon />
                </GridIcon>
                <GridIcon name="MoreIcon">
                    <MoreIcon />
                </GridIcon>
                <GridIcon name="MorePagesIcon">
                    <MorePagesIcon />
                </GridIcon>
                <GridIcon name="NextIcon">
                    <NextIcon />
                </GridIcon>
                <GridIcon name="OfflineIcon">
                    <OfflineIcon />
                </GridIcon>
                <GridIcon name="OrganizationIcon">
                    <OrganizationIcon />
                </GridIcon>
                <GridIcon name="ParkingCameraIcon">
                    <ParkingCameraIcon />
                </GridIcon>
                <GridIcon name="PDFIcon">
                    <PDFIcon />
                </GridIcon>
                <GridIcon name="ZIPIcon">
                    <ZIPIcon />
                </GridIcon>
                <GridIcon name="TXTIcon">
                    <TXTIcon />
                </GridIcon>
                <GridIcon name="MDIcon">
                    <MDIcon />
                </GridIcon>
                <GridIcon name="HTMLIcon">
                    <HTMLIcon />
                </GridIcon>
                <GridIcon name="DOCIcon">
                    <DOCIcon />
                </GridIcon>
                <GridIcon name="PeopleCountingCameraIcon">
                    <PeopleCountingCameraIcon />
                </GridIcon>
                <GridIcon name="PlcControllerIcon">
                    <PlcControllerIcon />
                </GridIcon>
                <GridIcon name="PointIcon">
                    <PointIcon />
                </GridIcon>
                <GridIcon name="PositionAndAscDescIcon">
                    <PositionAndAscDescIcon />
                </GridIcon>
                <GridIcon name="ProfileIcon">
                    <ProfileIcon />
                </GridIcon>
                <GridIcon name="RawIcon">
                    <RawIcon />
                </GridIcon>
                <GridIcon name="RedirectIcon">
                    <RedirectIcon />
                </GridIcon>
                <GridIcon name="NarrowIcon">
                    <NarrowIcon />
                </GridIcon>
                <GridIcon name="RemoveIcon">
                    <RemoveIcon />
                </GridIcon>
                <GridIcon name="RemoveFiltersIcon">
                    <RemoveFiltersIcon />
                </GridIcon>
                <GridIcon name="RemoveLinkIcon">
                    <RemoveLinkIcon />
                </GridIcon>
                <GridIcon name="RemovePositionIcon">
                    <RemovePositionIcon />
                </GridIcon>
                <GridIcon name="RemoveTagsIcon">
                    <RemoveTagsIcon />
                </GridIcon>
                <GridIcon name="RowPositionIcon">
                    <RowPositionIcon />
                </GridIcon>
                <GridIcon name="SaveIcon">
                    <SaveIcon />
                </GridIcon>
                <GridIcon name="SearchIcon">
                    <SearchIcon />
                </GridIcon>
                <GridIcon name="SelectionIcon">
                    <SelectionIcon />
                </GridIcon>
                <GridIcon name="SeverityIcon">
                    <SeverityIcon />
                </GridIcon>
                <GridIcon name="StickyIcon">
                    <StickyIcon />
                </GridIcon>
                <GridIcon name="SuccessLargeIcon">
                    <SuccessLargeIcon />
                </GridIcon>
                <GridIcon name="SuccessSmallIcon">
                    <SuccessSmallIcon />
                </GridIcon>
                <GridIcon name="TagsIcon">
                    <TagsIcon />
                </GridIcon>
                <GridIcon name="ThermometerIcon">
                    <ThermometerIcon />
                </GridIcon>
                <GridIcon name="TreeIcon">
                    <TreeIcon />
                </GridIcon>
                <GridIcon name="TreeCloseIcon">
                    <TreeCloseIcon />
                </GridIcon>
                <GridIcon name="TreeOpenIcon">
                    <TreeOpenIcon />
                </GridIcon>
                <GridIcon name="WarningLargeIcon">
                    <WarningLargeIcon />
                </GridIcon>
                <GridIcon name="IncidentsListIcon">
                    <IncidentsListIcon />
                </GridIcon>
                <GridIcon name="CurrentDayIcon">
                    <CurrentDayIcon />
                </GridIcon>
                <GridIcon name="WarningSmallIcon">
                    <WarningSmallIcon />
                </GridIcon>
                <GridIcon name="WeatherIcon">
                    <WeatherIcon />
                </GridIcon>
                <GridIcon name="XLSIcon">
                    <XLSIcon />
                </GridIcon>
                <GridIcon name="ZonesLargeIcon">
                    <ZonesLargeIcon />
                </GridIcon>
                <GridIcon name="ZonesSmallIcon">
                    <ZonesSmallIcon />
                </GridIcon>
                <GridIcon name="ZoomInIcon">
                    <ZoomInIcon />
                </GridIcon>
                <GridIcon name="ZoomOutIcon">
                    <ZoomOutIcon />
                </GridIcon>

                <GridIcon name="ClockIcon">
                    <ClockIcon />
                </GridIcon>
                <GridIcon name="AttachmentIcon">
                    <AttachmentIcon />
                </GridIcon>
                <GridIcon name="AddAttachmentIcon">
                    <AddAttachmentIcon />
                </GridIcon>
                <GridIcon name="LinkIcon">
                    <LinkIcon />
                </GridIcon>
                <GridIcon name="AddLinkIcon">
                    <AddLinkIcon />
                </GridIcon>
            </Grid>

            <Typography
                sx={{
                    pb: 1,
                    mt: 2,
                    mb: 3,
                    borderBottom: '1px solid',
                    borderColor: 'grey.400',
                }}
                variant="h1"
            >
                Modules
            </Typography>
            <Grid container spacing={4} flexDirection="row">
                <GridIcon name="YodiDeskIcon">
                    <YodiDeskIcon />
                </GridIcon>
                <GridIcon name="YodiDeskAnalyticsIcon">
                    <YodiDeskAnalyticsIcon />
                </GridIcon>
                <GridIcon name="YodiDeskGroupsIcon">
                    <YodiDeskGroupsIcon />
                </GridIcon>
                <GridIcon name="YodiDeskManagementIcon">
                    <YodiDeskManagementIcon />
                </GridIcon>
                <GridIcon name="YodiDeskMyBookingIcon">
                    <YodiDeskMyBookingIcon />
                </GridIcon>
                <GridIcon name="YodiDeskOverviewIcon">
                    <YodiDeskOverviewIcon />
                </GridIcon>
                <GridIcon name="YodiDeskRestrictionIcon">
                    <YodiDeskRestrictionIcon />
                </GridIcon>
                <GridIcon name="IncidentsIcon">
                    <IncidentsIcon />
                </GridIcon>
                <GridIcon name="IncidentsListIcon">
                    <IncidentsListIcon />
                </GridIcon>
                <GridIcon name="AdminIcon">
                    <AdminIcon />
                </GridIcon>
                <GridIcon name="InfrastructureIcon">
                    <InfrastructureIcon />
                </GridIcon>
                <GridIcon name="TagsManagementIcon">
                    <TagsManagementIcon />
                </GridIcon>
                <GridIcon name="UserManagementIcon">
                    <UserManagementIcon />
                </GridIcon>
                <GridIcon name="ISOIcon">
                    <ISOIcon />
                </GridIcon>
                <GridIcon name="ISOActionItemsIcon">
                    <ISOActionItemsIcon />
                </GridIcon>
                <GridIcon name="ISOAuditsIcon">
                    <ISOAuditsIcon />
                </GridIcon>
                <GridIcon name="ISOKPIIcon">
                    <ISOKPIIcon />
                </GridIcon>
                <GridIcon name="ISOProcessIcon">
                    <ISOProcessIcon />
                </GridIcon>
                <GridIcon name="ISORisksIcon">
                    <ISORisksIcon />
                </GridIcon>
                <GridIcon name="ISOTrainingIcon">
                    <ISOTrainingIcon />
                </GridIcon>
                <GridIcon name="YodiSenseIcon">
                    <YodiSenseIcon />
                </GridIcon>
                <GridIcon name="YodiSenseTrendsIcon">
                    <YodiSenseTrendsIcon />
                </GridIcon>
                <GridIcon name="YodiSenseBillsMgmtIcon">
                    <YodiSenseBillsMgmtIcon />
                </GridIcon>
                <GridIcon name="YodiSenseDynamicMonIcon">
                    <YodiSenseDynamicMonIcon />
                </GridIcon>
                <GridIcon name="YodiSenseInsightsIcon">
                    <YodiSenseInsightsIcon />
                </GridIcon>
                <GridIcon name="ReportingIcon">
                    <ReportingIcon />
                </GridIcon>
                <GridIcon name="RulesIcon">
                    <RulesIcon />
                </GridIcon>
                <GridIcon name="YodiTaskIcon">
                    <YodiTaskIcon />
                </GridIcon>
                <GridIcon name="YodiSafeIcon">
                    <YodiSafeIcon />
                </GridIcon>
                <GridIcon name="YodiSpaceIcon">
                    <YodiSpaceIcon />
                </GridIcon>
            </Grid>

            <Grid>
                <Typography
                    sx={{
                        pb: 1,
                        mt: 2,
                        mb: 3,
                        borderBottom: '1px solid',
                        borderColor: 'grey.400',
                    }}
                    variant="h1"
                >
                    Symbols
                </Typography>
                <Grid container spacing={4} flexDirection="row">
                    <GridIcon name="No Data">
                        <NoDataIcon
                            sx={{
                                height: '80px',
                                width: '80px',
                                color: 'common.brandColor.300',
                            }}
                            viewBox="0 0 80 80"
                            fill="none"
                        />
                    </GridIcon>
                    <GridIcon name="No Tasks">
                        <NoTasksIcon
                            sx={{
                                height: '80px',
                                width: '80px',
                                color: 'common.brandColor.300',
                            }}
                            viewBox="0 0 80 80"
                            fill="none"
                        />
                    </GridIcon>
                    <GridIcon name="MenuCloseIcon">
                        <MenuCloseIcon
                            sx={{
                                height: '80px',
                                width: '80px',
                                color: 'common.brandColor.300',
                            }}
                            viewBox="0 0 80 80"
                            fill="none"
                        />
                    </GridIcon>
                    <GridIcon name="DropdownNoResultIcon">
                        <DropdownNoResultIcon
                            sx={{
                                height: '80px',
                                width: '80px',
                                color: 'common.brandColor.300',
                            }}
                            viewBox="0 0 80 80"
                            fill="none"
                        />
                    </GridIcon>
                    <GridIcon name="PinIcon">
                        <PinIcon
                            sx={{
                                height: '80px',
                                width: '80px',
                                color: 'common.brandColor.300',
                            }}
                            viewBox="0 0 80 80"
                            fill="none"
                        />
                    </GridIcon>
                </Grid>
            </Grid>
        </Box>
    );
};
export const Default = Template.bind({});

export default {
    component: Default,
    title: 'Styleguide/Iconography',
    parameters: {
        layout: 'centered',
    },
    decorators: [(Story) => <Box>{Story()}</Box>],
} as Meta;
