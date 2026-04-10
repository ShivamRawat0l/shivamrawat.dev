type TopSkillsMarqueeProps = {
	skills: string[];
};

export function TopSkillsMarquee({ skills }: TopSkillsMarqueeProps) {
	return (
		<div className="top-skills-marquee" aria-label="Core skills">
			<div className="skills-marquee-track">
				{[...skills, ...skills].map((skill, index) => (
					<span key={`${skill}-${index}`} className="marquee-item">
						◆ {skill}
					</span>
				))}
			</div>
		</div>
	);
}
