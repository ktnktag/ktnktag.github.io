import BrandedLink from '../../common/button/BrandedLink'

export default function ProjectHeader() {
    return <header className="blog-header">
        <div className="alignment text-center">
            <BrandedLink path="https://www.sap.com/index.html" />
            <h1 className="text-box">
                Design System for the Leading Global Tech Company
            </h1>
        </div>
        <img src={headerImg} className="header-img" alt="header" />
    </header>
}