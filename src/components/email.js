import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Email = () => {
  return (
    <section class="thumbnails email" id="emails" role="tabpanel">
        <h2>Emails</h2>
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573426/thumbs_email/doc_management2_ud8uee.jpg" alt="email-1" />
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573319/thumbs_email/bdc_email_sdbc5l.png" alt="email-2" />
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573426/thumbs_email/bucket_q5jlbq.jpg" alt="email-3" />
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573397/thumbs_email/box_trucks2_c9bife.jpg" alt="email-4" />
        <img src="https://res.cloudinary.com/jryandoherty/image/upload/v1648573519/thumbs_email/office-cubes_tdceiy.jpg" alt="email-5" />
    </section>

  );
}
export default Email;