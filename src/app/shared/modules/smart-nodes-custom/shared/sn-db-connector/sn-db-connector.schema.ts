import { SnNodeSchema } from '../../../smart-nodes/dto';

export const SN_DB_CONNECTOR_NODE_SCHEMA: SnNodeSchema = {
    displayName: 'SN-DB-CONNECTOR',
    type: 'SnDBConnectorNode',
    icon: 'fa-solid fa-database',
    flows: [],
    params: [{
        direction: 'out',
        key: 'result',
        types: 'sys:dbconnection',
        multiple: false,
        pluggable: true,
        master: true,
        displayName: 'SN-DB-CONNECTOR-RESULT',
    }, {
        key: 'type',
        direction: 'in',
        types: 'string',
        multiple: false,
        master: false,
        required: true,
        displayName: 'SN-DB-CONNECTOR-TYPE',
        pluggable: false,
        display: 'select',
        default: 'mysql',
    },  {
        key: 'host',
        direction: 'in',
        displayName: 'SN-DB-CONNECTOR-HOST',
        types: 'string',
        required: true,
        multiple: false,
        display: 'input',
        pluggable: true,
    },  {
        key: 'port',
        direction: 'in',
        displayName: 'SN-DB-CONNECTOR-PORT',
        types: 'number',
        required: true,
        multiple: false,
        display: 'input',
        pluggable: true,
    }, {
        key: 'user',
        direction: 'in',
        displayName: 'SN-DB-CONNECTOR-USER',
        types: 'string',
        required: true,
        multiple: false,
        display: 'input',
        pluggable: true,
    }, {
        key: 'password',
        direction: 'in',
        displayName: 'SN-DB-CONNECTOR-PASSWORD',
        types: 'string',
        required: true,
        multiple: false,
        display: 'password',
        pluggable: true,
    }, {
        key: 'database',
        direction: 'in',
        displayName: 'SN-DB-CONNECTOR-DATABASE',
        types: 'string',
        required: true,
        multiple: false,
        display: 'input',
        pluggable: true,
    }],
    sections: [{
        key: 'options',
        displayName: 'SN-DB-CONNECTOR-OPTIONS',
        editable: false,
        open: false,
        hidden: true,
        params: [{
            key: 'selfSignedCertificate',
            direction: 'in',
            types: 'boolean',
            multiple: false,
            displayName: 'SN-DB-CONNECTOR-SELF-SIGNED-CERTIFICATE',
            pluggable: true,
            required: false,
            display: 'input',
            default: false,
        }, {
            key: 'azure',
            direction: 'in',
            types: 'boolean',
            multiple: false,
            displayName: 'SN-DB-CONNECTOR-AZURE',
            pluggable: true,
            required: false,
            display: 'input',
            default: false,
        }],
    }],
};