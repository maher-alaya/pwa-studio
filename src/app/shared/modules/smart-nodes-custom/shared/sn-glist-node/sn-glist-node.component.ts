import { Component, ChangeDetectorRef } from '@angular/core';
import { SnActionsService, SnUtilsService } from '../../../smart-nodes/services';
import { SnNodeSchema } from '../../../smart-nodes/dto';
import * as _ from 'lodash';
import { SnATNodeComponent } from '../sn-at-node/sn-at-node.component';
import { SnATNodeUtilsService } from '../sn-at-node/sn-at-node-utils.service/sn-at-node-utils.service';
import { SN_BASE_METADATA } from '../../../smart-nodes/components';
import { SessionsService } from 'src/app/shared/services';
import { GenericListDto } from '@algotech-ce/core';

@Component({
    template: SN_BASE_METADATA.template,
})
export class SnGListNodeComponent extends SnATNodeComponent {

    gListModel: GenericListDto;

    constructor(
        protected snActions: SnActionsService,
        protected snATNodeUtils: SnATNodeUtilsService,
        protected ref: ChangeDetectorRef,
        protected sessionsService: SessionsService,
        protected snUtils: SnUtilsService,
    ) {
        super(snActions, snATNodeUtils, ref);
    }

    initialize(schema: SnNodeSchema) {

        this.load(this.snATNodeUtils.getGenericList(), 'selectedglist');
        super.initialize(schema);
    }

    calculate() {
        super.calculate();
    }
}

