import { CA, TELEGRAM_URL, X_URL } from '../config'
import { CopyButton } from './CopyButton'
import mascot from '../assets/mascot.jpg'

export function Hero() {
  return (
    <div className="wrap">
      <div className="hero">
        <div>
          <span className="eyebrow">● live on-chain · community run</span>
          <h1 className="headline">
            The bag stays on.
            <br />
            <span className="flash-grad">The bags get heavier.</span>
          </h1>
          <p className="sub">
            $FLASHOFFICIAL — no face, no doxx, no exit strategy besides vibes. Just a woman in a
            paper bag and a chart that refuses to explain itself.
          </p>
          <div className="cta-row">
            <a className="pill solid" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              Join Telegram
            </a>
            <a className="pill" href={X_URL} target="_blank" rel="noreferrer">
              Follow on X
            </a>
          </div>
          <div id="buy" className="ca-box">
            <span className="ca-label">Contract</span>
            <span className="ca-value">{CA}</span>
            <CopyButton />
          </div>
        </div>
        <div className="hero-art">
          <div className="art-glow"></div>
          <div className="art-frame">
            <img src={mascot} alt="$FLASHOFFICIAL mascot, a figure with a paper bag over their head" loading="eager" />
            <div className="art-tag">
              <span>$FLASHOFFICIAL</span>
              <span>anon rated ⚡</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
