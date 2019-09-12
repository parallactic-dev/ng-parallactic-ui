# Prallactic UI

A collection of simple unstyled ui components for Angular.

## Installation

Install with npm
```shell
npm i ng-parallactic-ui --save
```

Import the library in your `app.module.ts`
```typescript
import { NgParallacticUiModule } from 'ng-parallactic-ui';

@NgModule({
    ...
    imports: [
        NgParallacticUiModule,
    ],
})
```


## Components

### Datepicker
Insert a datepicker in your forms
```html
<pl-datepicker name="date" [(ngModel)]="date"></pl-datepicker>
```

#### Options
| Option        | Default       | Description                                          |
| ------------- | ------------- | ---------------------------------------------------- |
| dateFormat    | 'dd.MM.yyyy'  | Defines the date format to display the selected date |


### Table
Insert a datepicker in your forms
```html
<pl-table 
    [tableData]="data" 
    [tableOptions]="tableOptions"
    [tableColumnsDefinitions]="columnDefinitions"
    (tableRowClicked)="onTableRowClick($event)">
</pl-table>
```

#### Options
| Name              | Default   | Description                                                                       |
| ----------------- | --------- | --------------------------------------------------------------------------------- |
| sortBy            | `null`    | Define column (field name) to sort                                                |
| sortOrder         | 'asc'     | Defines the sort direction (asc|desc)                                             |
| selectableRows    | `false`   | Defines if a row is selectable. If yes, a checkbox is added in front of each row. |
| selectOnRowClick  | `false`   | Makes the whole row clickable to select it                                        |

#### Column Definitions
| Name              | Description                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------- |
| title             | Sets the column title                                                                         |
| field             | Define the field name from the data object (use `title.short` to select nestet field)         |
| sortable          | Makes the column sortable                                                                     |
| valueFormatter    | Use a function to return a formatted value (arguments: value, rowData, colDef)                |
| tableCellRenderer | Use a custom component to render the cell (`@Input() tableCellData: PlTableCellData;`)        |

#### Events
| Name                      | Description                         |
| ------------------------- | ----------------------------------- |
| tableRowClicked           | When a row has been clicked         |
| tableRowSelectionChanged  | When the selection model changed    |
