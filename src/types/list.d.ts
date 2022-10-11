interface ListData {
    style: string;
    items: 'li'[]
}

interface ListConfig {
    defaultStyle: string;
}
declare module '@editorjs/list' {
    export class List {
        constructor(config?: { data: ListData, config: ListConfig, api: object, readOnly: boolean })

        static get isReadOnlySupported(): boolean;

        static get enableLineBreaks(): boolean;

        static get toolbox(): {icons: string, title: string};

        save(): ListData;

        static get conversionConfig(): {export: function, import: function};

        static get sanitize(): {style: {}, items: {br: boolean}};

        renderSettings(): HTMLElement;

        onPaste(event: React.MouseEvent<HTMLInputElement>): void;

        static get pasteConfig(): {tags: ['OL', 'UL', 'LI']};

        makeMainTag(style: string): HTMLOListElement | HTMLUListElement;

        toggleTune(style: string): void;
        
        get CSS(): {
            baseBlock: string,
            wrapper: string,
            wrapperOrdered: string,
            wrapperUnordered: string,
            item: string,
            settingsWrapper: string,
            settingsButton: string,
            settingsButtonActive: string,
        };

        set data(listData: ListData): void;

        get data(): ListData;

        _make(tagName: string, classNames?: string[], attributes?: {}): HTMLElement;

        get currentItem(): HTMLElement;

        getOutofList(event: KeyboardEvent): void;

        backspace(event: KeyboardEvent): void;

        selectItem(event: KeyboardEvent): void;

        pasteHandler(element: HTMLUListElement|HTMLOListElement|HTMLLIElement): ListData;

    }
}