import { NgModule } from '@angular/core';

//primeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';

import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { SplitterModule } from 'primeng/splitter';
import { InputNumberModule } from 'primeng/inputnumber';
import { DataViewModule } from 'primeng/dataview';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule,
    TableModule,
    SplitterModule,
    InputNumberModule,
    DataViewModule,
    DropdownModule,
    ConfirmDialogModule
  ]
})
export class PrimeNgModule { }
