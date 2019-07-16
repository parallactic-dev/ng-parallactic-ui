import { Component } from "@angular/core";

export interface PlTableColumnDefinition {
    title: string,
    field: string,
    width?: string,
    valueFormatter?: Function,
    tableCellRenderer?: any,
    sortable?: boolean,
}