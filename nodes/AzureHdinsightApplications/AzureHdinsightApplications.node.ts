import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureHdinsightApplications implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Hdinsight Applications',
                name: 'N8nDevAzureHdinsightApplications',
                icon: { light: 'file:./azure-hdinsight-applications.png', dark: 'file:./azure-hdinsight-applications.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'HDInsight Management Client.',
                defaults: { name: 'Azure Hdinsight Applications' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureHdinsightApplicationsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
