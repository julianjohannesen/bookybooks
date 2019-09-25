import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer>
			<div className="content has-text-centered">
				<p className="is-marginless"><strong>BookyBooks</strong> by <a href="https://github.com/julianjohannesen">Julian Johannesen</a>. Source code licensed under <a href="http://opensource.org/licenses/mit-license.php">MIT License</a>.</p>
				<p><Link to='/terms'>Terms</Link> and <Link to='/privacy'>Privacy</Link> policy.</p>
				<p></p>
			</div>
		</footer>
	)
}
