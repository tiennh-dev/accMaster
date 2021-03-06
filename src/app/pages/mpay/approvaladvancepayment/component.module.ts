

import { Routes, RouterModule } from '@angular/router';
import { CommonModule, DecimalPipe, CurrencyPipe } from '@angular/common';
import { FileService } from 'src/app/services/file.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { BlockUIModule } from 'ng-block-ui';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditorModule } from '@tinymce/tinymce-angular';

import { IndexComponent } from './index.component';
import { ApprovalOrderService } from 'src/app/services/approval.order.service';
import { VizModule } from 'src/app/shared/workflow/viz/viz.module';
import { KeyboardShortcutsModule } from 'ng-keyboard-shortcuts';
import {WorkflowService} from '../../../services/workflow.service';
import { ApprovalAdvancePaymentProcessComponent } from './approvaladvancepayment.process.component';
import { ApprovalAddPaymentComponent } from './approvaladdpayment.component';
import { AcceptApprovalPaymentMultiComponent } from './acceptapprovalpaymentmulti.component';
import { WorkflowAdvancePaymentComponent } from './workflowadvancepayment.component';
import { ApprovalAdvanceCustomerInfoComponent } from './approvaladvancecustomer-info.component';
import { ApprovalAdvancePaymentService } from 'src/app/services/approvaladvancepayment.service';
import { AdvancePaymentFormatCurrencyDirective } from './advancepaymentformatcurrency.directive';
const routes: Routes = [
  {
    path: '',
     component: IndexComponent
  }
];
@NgModule({
  declarations: [
     IndexComponent,
     ApprovalAddPaymentComponent,
    ApprovalAdvancePaymentProcessComponent,
    WorkflowAdvancePaymentComponent,
    ApprovalAdvanceCustomerInfoComponent,
    AcceptApprovalPaymentMultiComponent,
    AdvancePaymentFormatCurrencyDirective
  ],
  imports: [
    CommonModule,
    FormsModule, FileUploadModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
    DragDropModule,
    RouterModule.forChild(routes),
    BlockUIModule.forRoot({
      delayStart: 100,
      delayStop: 500
    }),
    NgSelectModule,
    EditorModule, VizModule, KeyboardShortcutsModule.forRoot()
  ],
  providers: [
    FileService,
    ApprovalAdvancePaymentService,
    WorkflowService,
    CurrencyPipe, DecimalPipe,
  ],
  bootstrap: [
    IndexComponent,
    ApprovalAddPaymentComponent,
    ApprovalAdvancePaymentProcessComponent,
    WorkflowAdvancePaymentComponent,
    ApprovalAdvanceCustomerInfoComponent,
    AcceptApprovalPaymentMultiComponent
  ],
})

export class ApprovalAdvancePaymentComponentModule {
}
