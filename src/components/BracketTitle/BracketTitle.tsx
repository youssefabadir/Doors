import './BracketTitle.css';

interface BracketTitleProps {
    text: string;
}

const BracketTitle = ({ text }: BracketTitleProps) => {
    return (
        <div className="bracket-label">
            <div className="custom-bracket bracket-l"></div>
            <div>{text}</div>
            <div className="custom-bracket bracket-r"></div>
        </div>
    );
};

export default BracketTitle;