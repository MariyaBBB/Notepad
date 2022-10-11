// Type definitions for @editorjs/paragraph 2.6
// Project: https://github.com/editor-js/header#readme (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Maykon Oliveira <https://github.com/maykon-oliveira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6


interface ParagraphData {
    text: string;
}

interface ParagraphConfig {
    placeholder: string;
    preserveBlank: boolean;
}

declare module '@editorjs/paragraph' {
    export class Paragraph {
        constructor(config?: { data: ParagraphData, config: ParagraphConfig, api: object, readOnly: boolean })

        onKeyUp(e: React.MouseEvent<HTMLInputElement>): void;

        drawView(): HTMLElement;

        merge(data: ParagraphData): void;

        validate(blockData: ParagraphData): boolean;

        save(toolsContent: HTMLElement): ParagraphData;

        onPaste(event: React.MouseEvent<HTMLInputElement>): void;

        static get conversionConfig(): {export: string, import: string};

        static get sanitize(): {text: {br: boolean}};

        static get isReadOnlySupported(): boolean;

        get data(): ParagraphData

        set data(data: ParagraphData): void;

        static get pasteConfig(): { tags: string[]};

        static get toolbox(): {
            icon: string,
            title: string,
        }
    }
}

