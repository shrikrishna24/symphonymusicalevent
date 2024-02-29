import React from "react";
import './header.css'

export default function HeadText({ title, type, headingclass,spanTitle }) {
    let TagName;

    if (type === 'heading') {
        TagName = 'h1';
    } else if (type === 'subheading') {
        TagName = 'h4';
    } else if (type === 'subtitle') {
        TagName = 'h6';
    } else {
        // Default to a paragraph if type is not recognized
        TagName = 'p';
    }

    return (
        <div>
            <TagName className={headingclass}>{title}<span className="span-header">{spanTitle}</span></TagName>
        </div>
    );
}
