import { Injectable } from '@angular/core';
import { PlTableColumnDefinition } from '../interfaces/pl-table-column-definition';
import { PlTableCellData } from '../interfaces/pl-table-cell-data';

@Injectable({
    providedIn: 'root'
})
export class PlTableCellService {

    constructor() { }

    public getTableCellValue(tableRowData: any[], tableColumnDefinition: PlTableColumnDefinition): PlTableCellData {
        const fields = tableColumnDefinition.field.split('.');
        let cellValue: any = tableRowData;

        for (let i = 0; i < fields.length; i++) {
            const key = fields[i];
            if (cellValue[key])
                cellValue = cellValue[key]
            else
                cellValue = '';
        }

        if (tableColumnDefinition.valueFormatter) {
            cellValue = tableColumnDefinition.valueFormatter(cellValue, tableRowData, tableColumnDefinition);
        }

        return { value: cellValue };
    }
}
