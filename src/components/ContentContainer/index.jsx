const ContentContainer = ({ children, className }) => {
	return <div className={`bg-zinc-800 m-4 rounded-lg p-4 ${className}`}>{children}</div>;
};

export default ContentContainer;
