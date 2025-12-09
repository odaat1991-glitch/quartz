import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// This component reads the frontmatter of a file. 
// If it detects 'rating' and 'cover', it renders a special header card.
// If not, it returns null (does nothing).

const ReviewCard: QuartzComponentConstructor = (opts?: any) => {
    function ReviewCardComponent({ fileData, displayClass }: QuartzComponentProps) {
        const fm = fileData.frontmatter

        // 1. Guard Clause: If no rating, this isn't a review. Abort.
        if (!fm?.rating) {
            return null
        }

        // 2. Data Extraction
        const title = fm.title
        const cover = fm.cover ? `../../${fm.cover}` : null // Resolves relative path
        const rating = fm.rating // e.g., "⭐⭐⭐⭐⭐" or 5
        const type = fm.type || "Review" // e.g., "Game", "Manga"

        // 3. Render
        return (
            <div className={classNames(displayClass, "review-hero-container")}>
                <div className="review-card-layout" style={{
                    display: 'flex',
                    gap: '1.5rem',
                    background: 'var(--lightgray)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    border: '1px solid var(--gray)'
                }}>

                    {/* Cover Art Image */}
                    {cover && (
                        <div className="review-cover" style={{ flexShrink: 0 }}>
                            <img
                                src={cover}
                                alt={title}
                                style={{
                                    width: '120px',
                                    height: '160px',
                                    objectFit: 'cover',
                                    borderRadius: '6px',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
                                }}
                            />
                        </div>
                    )}

                    {/* Metadata */}
                    <div className="review-meta" style={{ flexGrow: 1 }}>
                        <span style={{
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            letterSpacing: '0.1em',
                            color: 'var(--secondary)',
                            fontWeight: 'bold'
                        }}>
                            {type} Review
                        </span>

                        <h1 style={{
                            marginTop: '0.5rem',
                            marginBottom: '0.5rem',
                            fontSize: '2rem',
                            lineHeight: '1.1'
                        }}>
                            {title}
                        </h1>

                        <div className="rating-stars" style={{
                            color: '#eab308',
                            fontSize: '1.5rem',
                            letterSpacing: '0.2rem'
                        }}>
                            {rating}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return ReviewCardComponent
}

export default ReviewCard
