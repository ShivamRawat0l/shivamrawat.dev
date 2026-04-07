interface ISocialProps {
	icon: string;
	label: string;
	link: string;
}

export const Social = (props: ISocialProps) => {
	const { icon, label } = props;

	return (
		<div className="flex-row-start-center" style={{ width: 200, borderRadius: 4 }}>
			<img src={icon} style={{ width: 76, height: 76 }} />
			<div style={{ fontSize: 20 }}>{label}</div>
		</div>
	);
};
