import { MouseEvent } from "react";

interface TableData {
    content: string;
}

interface TableConfig {
    rows: number;
    cols: number;
}

declare class Toolbox {
    constructor(config?: { data: TableData, config: TableConfig, api: object, readOnly: boolean })

    static get CSS(): {toolbox: string, toolboxShowed: string, toggler: string};

    get element(): HTMLElement;

    createToolbox(): HTMLElement;

    createToggler(): HTMLElement;

    createPopover(): {items: {label: string, icon: string, (): ClickEvent}[]};

    togglerClicked(): void;

    show(computePositiomMethod: function): void;

    hide(): void;
} 

declare module '@editorjs/table' {
    export class Table {
        constructor(config?: { readOnly: boolean, api: object, data: TableData, config: TableConfig })

        getWrapper(): HTMLElement;

        bindEvents(): void;

        createColumnToolbox(): Toolbox;

        createRowToolbox(): Toolbox;

        moveCursorToNextRow(): void;

        getCell(row: number, column: number): HTMLElement;

        getRow(row: number): HTMLElement;
        
        getRowByCell(cell: number): HTMLElement;

        getRowFirstCell(row: number): HTMLElement;

        setCellContent(row: number, column: number, content: string): void;
        
        addColumn(columnIndex?: number, setFocus?: boolean): void;

        addRow(index?:number, setFocus?: boolean): HTMLElement;
        
        deleteColumn(index: number): void;

        deleteRow(index: number): void;

        createTableWrapper(): HTMLElement;

        computeInitialSize(): {rows: number, cols: number};

        resize(): void;

        fill(): void;

        fillRow(row: number, numberOfColumns: number): void;

        createCell(): HTMLElement;

        get numberOfRows(): number;

        get numberOfColumns(): number;

        get isColumnMenuShowing(): boolean;

        get isRowMenuShowing(): boolean;

        onMouseMoveInTable(event: React.MouseEvent<HTMLInputElement>): void;

        onKeyPressListener(event: React.MouseEvent<HTMLInputElement>): void;

        onKeyDownListener(event: React.MouseEvent<HTMLInputElement>): void;

        focusInTableListener(event: React.MouseEvent<HTMLInputElement>): void;

        hideToolboxes(): void;

        hideRowToolbox(): void;

        hideColumnToolbox(): void;

        focusCell(): void;

        get focusedCellElem(): HTMLElement;

        updateToolboxesPosition(row?: number, column?: number): {left?: string, top?: string};
        
        setHeadingsSetting(withHeadings: boolean): void;

        addHeadingAttrToFirstRow(): void;

        removeHeadingAttrFromFirstRow(): void;

        selectRow(index: number): void;

        unselectRow(): void;

        selectColumn(index: number): void;

        unselectColumn(): void;

        getHoveredCell(event: MouseEvent): {
            row: number,
            column: number
        };

        binSearch(numberOfCells: number, getCell: function, beforeTheLeftBorder: function, afterTheRightBorder: function): number;
        
        getData(): TableData[][];

        destroy(): void;
    }
}
