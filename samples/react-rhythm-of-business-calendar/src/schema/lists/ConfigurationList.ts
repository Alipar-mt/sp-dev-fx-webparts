import { IListDefinition, FieldType, IViewDefinition, includeStandardViewFields, INumberFieldDefinition, ListTemplateType, IChoiceFieldDefinition, IBooleanFieldDefinition, RoleOperation, RoleType } from "common/sharepoint";
import { ListViewKeys, ViewKeys, ViewYearFYKeys } from "model";
import { Defaults } from "../Defaults";
import { TemplateViewKeys } from "model/TemplateViewKeys";

const Field_SchemaVersion: INumberFieldDefinition = {
    type: FieldType.Number,
    name: 'SchemaVersion',
    displayName: "Schema Version",
    required: true
};

const Field_CurrentUpgradeAction: INumberFieldDefinition = {
    type: FieldType.Number,
    name: 'CurrentUpgradeAction',
    displayName: "Current Upgrade Action"
};

const Field_FiscalYearSartMonth: INumberFieldDefinition = {
    type: FieldType.Number,
    name: 'FiscalYearSartMonth',
    displayName: "Fiscal Year Sart Month",
    min: 1,
    max: 12,
    required: true,
    default: "1"
};

const Field_FiscalYearStartYear: IChoiceFieldDefinition = {
    type: FieldType.Choice,
    name: 'FiscalYearStartYear',
    displayName: "Fiscal Year Start Year",
    choices: Object.keys(ViewYearFYKeys),
    default: ViewYearFYKeys["Next Year"]
};

const Field_ListViewColumn: IChoiceFieldDefinition = {
    type: FieldType.Choice,
    name: 'ListViewColumn',
    displayName: "List View Column",
    choices: Object.keys(ListViewKeys),
    default: ListViewKeys["displayName"],
    multi: true
};


const Field_UseApprovalsEmailNotification: IBooleanFieldDefinition = {
    type: FieldType.Boolean,
    name: 'UseApprovalsEmailNotification',
    displayName: "Use Approvals Email Notification",
    default: "No"
};

const Field_TemplateView: IChoiceFieldDefinition = {
    type: FieldType.Choice,
    name: 'TemplateView',
    displayName: "Template View",
    choices: Object.keys(TemplateViewKeys),
    default: TemplateViewKeys["eventTitle"],
    multi: true
};

const Field_UseApprovalsTeamsNotification: IBooleanFieldDefinition = {
    type: FieldType.Boolean,
    name: 'UseApprovalsTeamsNotification',
    displayName: "Use Approvals Teams Notification",
    default: "No"
};

const Field_UseAddToOutlook: IBooleanFieldDefinition = {
    type: FieldType.Boolean,
    name: 'UseAddToOutlook',
    displayName: "Use Add To Outlook",
    default: "Yes"
};

const Field_DefaultView: IChoiceFieldDefinition = {
    type: FieldType.Choice,
    name: 'DefaultView',
    displayName: "Default View",
    choices: Object.keys(ViewKeys),
    default: ViewKeys.monthly
};

const Field_UseRefiners: IBooleanFieldDefinition = {
    type: FieldType.Boolean,
    name: 'UseRefiners',
    displayName: "Use Refiners",
    default: "Yes"
};

const Field_RefinerRailInitiallyExpanded: IBooleanFieldDefinition = {
    type: FieldType.Boolean,
    name: 'RefinerRailInitiallyExpanded',
    displayName: "Refiner Rail Initially Expanded",
    default: "Yes"
};

const Field_QuarterViewGroupByRefinerId: INumberFieldDefinition = {
    type: FieldType.Number,
    name: 'QuarterViewGroupByRefinerId',
    displayName: 'Quarter View Group By Refiner Id'
};

const Field_UseApprovals: IBooleanFieldDefinition = {
    type: FieldType.Boolean,
    name: 'UseApprovals',
    displayName: "Use Approvals",
    default: "No"
};

const Field_AllowConfidentialEvents: IBooleanFieldDefinition = {
    type: FieldType.Boolean,
    name: 'AllowConfidentialEvents',
    displayName: "Allow Confidential Events",
    default: "No"
};

const View_AllItems: IViewDefinition = {
    title: "All Configurations",
    rowLimit: 1,
    paged: false,
    default: true,
    query: '',
    fields: includeStandardViewFields(
        Field_SchemaVersion,
        Field_CurrentUpgradeAction,
        Field_FiscalYearSartMonth,
        Field_DefaultView,
        Field_UseRefiners,
        Field_RefinerRailInitiallyExpanded,
        Field_QuarterViewGroupByRefinerId,
        Field_UseApprovals,
        Field_AllowConfidentialEvents,
        Field_FiscalYearStartYear,
        Field_UseApprovalsEmailNotification,
        Field_UseApprovalsTeamsNotification,
        Field_UseAddToOutlook,
        Field_ListViewColumn,
        Field_TemplateView
    )
};

export interface IConfigurationListDefinition extends IListDefinition {
    view_AllItems: IViewDefinition;
}

export const ConfigurationList: IConfigurationListDefinition = {
    title: Defaults.ListTitles.Configuration,
    description: '',
    template: ListTemplateType.GenericList,
    permissions: {
        copyRoleAssignments: false,
        userRoles: [
            { operation: RoleOperation.Add, roleType: RoleType.Administrator, userType: 'ownerGroup' },
            { operation: RoleOperation.Add, roleType: RoleType.Reader, userType: 'memberGroup' },
            { operation: RoleOperation.Add, roleType: RoleType.Reader, userType: 'visitorGroup' }
        ]
    },
    siteFields: [],
    fields: [
        Field_SchemaVersion,
        Field_CurrentUpgradeAction,
        Field_FiscalYearSartMonth,
        Field_DefaultView,
        Field_UseRefiners,
        Field_RefinerRailInitiallyExpanded,
        Field_QuarterViewGroupByRefinerId,
        Field_UseApprovals,
        Field_AllowConfidentialEvents,
        Field_FiscalYearStartYear,
        Field_UseApprovalsEmailNotification,
        Field_UseApprovalsTeamsNotification,
        Field_UseAddToOutlook,
        Field_ListViewColumn,
        Field_TemplateView
    ],
    views: [View_AllItems],
    view_AllItems: View_AllItems
};