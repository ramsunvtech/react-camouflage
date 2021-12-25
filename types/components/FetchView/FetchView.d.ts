import React from 'react';

export default FetchView;

interface FetchViewProps<T = {}> {
    status: string;
    statusMapping: any;
    children: React.Element;
}

declare function FetchView(props: FetchViewProps): any;

declare namespace FetchView {
    export { DefaultView as Initial };
    export { FetchingView as Fetching };
    export { FetchedView as Fetched };
    export { ErrorView as Error };
    export namespace propTypes {
        const statusMapping: any;
        const status: any;
        const children: any;
    }
}
declare function DefaultView({ children }: {
    children: any;
}): any;
declare function FetchingView({ loadingText, children }: {
    loadingText?: string;
    children: any;
}): any;
declare function FetchedView({ children }: {
    children: any;
}): any;
declare function ErrorView({ children }: {
    children: any;
}): any;
