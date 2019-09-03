import { Component } from "@angular/core";

export interface PlTableColumnDefinition {
    title: string,
    field: string,
    valueFormatter?: Function,
    tableCellRenderer?: any,
    sortable?: boolean,
}