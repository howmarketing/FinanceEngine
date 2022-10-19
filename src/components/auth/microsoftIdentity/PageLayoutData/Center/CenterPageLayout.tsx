import React from "react";

const Center: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
    let styles: React.CSSProperties = props?.style || {};
    styles = (styles || {});
    styles = typeof styles === 'object' ? styles : {};
    styles = !(Array.isArray(styles)) ? styles : {};
    styles = { ...styles, display: 'flex', justifyContent: 'center', alignItems: 'center' };
    return (
        <div {...props} className="d-flex justify-content-center" style={styles}>
            {props?.children || ''}
        </div>
    )
}
export default Center;