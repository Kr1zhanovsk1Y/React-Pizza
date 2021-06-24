import React from "react"
import ContentLoader from "react-content-loader"

function LoadingBlock() {

    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="138" cy="96" r="85" />
            <rect x="51" y="216" rx="6" ry="6" width="177" height="14" />
            <rect x="49" y="239" rx="6" ry="6" width="182" height="36" />
            <rect x="50" y="284" rx="6" ry="6" width="54" height="19" />
            <rect x="78" y="293" rx="0" ry="0" width="4" height="1" />
            <rect x="177" y="284" rx="6" ry="6" width="54" height="19" />
        </ContentLoader>
    )
}

export default LoadingBlock