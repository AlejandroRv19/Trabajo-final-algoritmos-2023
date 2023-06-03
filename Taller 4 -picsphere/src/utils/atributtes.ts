export const setAttributes = <obj extends Record<any, any>>(objProps: obj, elementRef: HTMLElement) => {
    Object.entries(objProps).forEach(([data_stories, newValue]) =>
    elementRef.setAttribute(data_stories, newValue)
    )
}