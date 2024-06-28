type TitleBarProps = {
    title: string;
    aside: string | null;
};

const TitleBar = ({ title, aside }: TitleBarProps) => (
    <div className="titleBar">
        <div className="titleBar__text">
            <span className="titleBar__title">
                {title && <h4 className="mb-2">{title}</h4>}
            </span>
            <span className="titleBar__aside">
                {aside && <h5>{aside}</h5>}
            </span>
        </div>
        <hr />
    </div>
);

export default TitleBar;