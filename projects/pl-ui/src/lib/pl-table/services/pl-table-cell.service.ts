import { Injectable } from '@angular/core';
import { PlTableColumnDefinition } from '../interfaces/pl-table-column-definition';
import { PlTableCellData } from '../interfaces/pl-table-cell-data';

@Injectable({
    providedIn: 'root'
})
export class PlTableCellService {

    constructor() { }

    public getTableCellValue(tableRowData: any[], tableColumnDefinition: PlTableColumnDefinition): PlTableCellData {
        if (!tableRowData || !tableColumnDefinition) return;
        
        const fields = tableColumnDefinition.field.split('.');
        let cellValue = tableRowData;

        for (let i = 0; i < fields.length; i++) {
            const key = fields[i];
            if (cellValue[key])
                cellValue = cellValue[key]
            else
                return undefined;
        }

        if (tableColumnDefinition.valueFormatter) {
            cellValue = tableColumnDefinition.valueFormatter(cellValue, tableRowData, tableColumnDefinition);
        }

        return { value: cellValue };
    }
}
