import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOjEzNTk2LCJ0eXBlIjoiYXV0aCIsImtleSI6IjB4RDQ2MTY4QjMwQWU2OGI0MGNCRWE3ZDZBODkyNmZBMDc1M0FlMWM0ZiJ9",
      payload: "eyJkb21haW4iOiJoZWxsbm8tc3VucmlzZWpveWZ1bDkudmVyY2VsLmFwcCJ9",
      signature: "Jp7Ow0qV0kTVqCTYBcofIwp/phBl5QzcKOuucf92RspTkAtzInDB5HvYzPggS5WbVx0s3fI6jGMLnFfhVUhXfBs="
    },
    miniapp: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      ogImageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Open",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
