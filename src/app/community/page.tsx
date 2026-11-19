import { Suspense } from "react";
import type { Metadata } from "next";
import type { GalleryPhoto } from "@/components/shared/PhotoGallery";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityGallery } from "@/components/community/CommunityGallery";
import { CommunityTestimonial } from "@/components/community/CommunityTestimonial";
import { CommunitySkeleton } from "@/components/community/CommunitySkeleton";
import { tokens } from "@/styles/tokens";

export const metadata: Metadata = {
  title: "Community - JB School, Bali",
  description:
    "The JB School Alumni Association and Parents Community: alumni and parents who stay connected and help shape the futures of our students.",
};

const { alumni, parents } = tokens.assets.community;

// Order follows the Figma "7.Community" grids (row by row).
const ALUMNI_PHOTOS: GalleryPhoto[] = [
  "School director shaking hands with alumni on stage",
  "Alumnus speaking on stage at the alumni association launch",
  "Alumni greeted on stage under the association banner",
  "Alumnus addressing the audience in front of the association banner",
  "Alumni on stage for the inauguration of the JB School Alumni Association",
  "Alumnus giving a speech at the alumni association launch",
].map((alt, i) => ({ src: alumni[i], alt }));

const PARENTS_PHOTOS: GalleryPhoto[] = [
  "Students and parents on a group outing",
  "Group photo of students and parents in a gallery restaurant",
  "Students dancing on stage at the Run & Raise event",
  "Student dance performance at the Run & Raise event",
  "Parents attending a meeting in the school hall",
  "Group photo of parents and teachers in the school hall",
].map((alt, i) => ({ src: parents[i], alt }));

export default function CommunityPage() {
  return (
    <Suspense fallback={<CommunitySkeleton />}>
      <CommunityHero />
      <CommunityGallery
        id="alumni-association-title"
        title="JB SCHOOL ALUMNI ASSOCIATION"
        intro="The JB School Alumni Association was founded by our graduates to serve as an unbreakable bridge, ensuring that those who have walked our halls always have a path back home. Through this enduring connection, our alumni proudly remain an active part of the JB School family, returning to share their journeys and ignite inspiration in the hearts of the younger generations following in their footsteps."
        photos={ALUMNI_PHOTOS}
        mobileOrderClassName="max-lg:[&>li:nth-child(3)]:order-1 max-lg:[&>li:nth-child(6)]:order-1"
      />
      <CommunityGallery
        id="parents-activities-title"
        title="PARENTS ACTIVITIES"
        intro="At JB School, we understand that raising a well-rounded child requires the united hearts of both educators and families, which is the driving force behind our active Parents Community. We proudly walk side-by-side with our parents, empowering them to step beyond the sidelines and become inspiring role models who actively help shape the bright futures of our students."
        photos={PARENTS_PHOTOS}
        mobileOrderClassName="max-lg:[&>li:nth-child(4)]:order-1"
      />
      <CommunityTestimonial />
    </Suspense>
  );
}
