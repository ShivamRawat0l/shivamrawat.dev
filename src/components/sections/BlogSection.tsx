import { FaArrowRight, FaMedium } from 'react-icons/fa';
import { Section } from '../layout/Section';
import type { BlogPost } from '../../types/portfolio';

type BlogSectionProps = {
	posts: BlogPost[];
	/** Fallback archive shown while the list is still empty. */
	archiveUrl?: string;
};

const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

function formatDate(iso: string) {
	const parsed = new Date(iso);
	return Number.isNaN(parsed.getTime()) ? iso : dateFormat.format(parsed);
}

export function BlogSection({ posts, archiveUrl }: BlogSectionProps) {
	return (
		<Section id="writing" index="04" title="Writing" subtitle="Notes on mobile engineering, native modules and the things I break along the way.">
			{posts.length ? (
				<div className="post-list">
					{posts.map((post) => (
						<article className="post" key={post.url}>
							<a href={post.url} target="_blank" rel="noreferrer">
								<div className="post-head">
									<h3>{post.title}</h3>
									<span className="label">{formatDate(post.date)}</span>
								</div>
								<p>{post.summary}</p>
							</a>
							<div className="row">
								{post.tags?.map((tag) => (
									<span className="tag" key={tag}>
										{tag}
									</span>
								))}
								{post.readingTime ? <span className="label">{post.readingTime}</span> : null}
							</div>
						</article>
					))}
				</div>
			) : (
				<div className="blog-empty">
					<span className="label">Coming soon</span>
					<h3>No posts here yet.</h3>
					<p>
						I'm writing up a few things I've learned shipping server-driven UI, real-time features and
						React Native bridges. First post lands here shortly.
					</p>
					{archiveUrl ? (
						<a className="btn" href={archiveUrl} target="_blank" rel="noreferrer">
							<FaMedium aria-hidden="true" />
							Read my older posts on Medium
							<FaArrowRight aria-hidden="true" />
						</a>
					) : null}
				</div>
			)}
		</Section>
	);
}
