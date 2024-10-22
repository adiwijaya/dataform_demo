const column_policy_list = {
    col_a: {
        bigqueryPolicyTags: [dataform.projectConfig.vars.confidential]
    },
    col_b: {
        bigqueryPolicyTags: [dataform.projectConfig.vars.confidential]
    }
};

module.exports = {
    column_policy_list
}