import { LazyVideo } from "@/components/ui/lazy-video";
import { SectionHeading } from "@/components/ui/section-heading";

const STATEMENT_VIDEO = {
  src: "https://videos.pexels.com/video-files/854053/854053-hd_1920_1080_25fps.mp4",
  poster:
    "https://images.pexels.com/videos/854053/free-video-854053.jpg?auto=compress&cs=tinysrgb&w=1600",
  credit: "footage — Coverr · Pexels (CC0)",
};

export default function Statement() {
  return (
    <section aria-label="Our position" className="relative overflow-hidden border-y border-white/[0.06]">
      {/* ambient code video */}
      <LazyVideo
        src={STATEMENT_VIDEO.src}
        poster={STATEMENT_VIDEO.poster}
        decorative
        className="absolute inset-0 opacity-25"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 90% at 50% 50%, rgba(5,5,6,0.82) 30%, rgba(5,5,6,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative py-24 md:py-36">
        <SectionHeading
          index=""
          label="why we exist"
          align="center"
          title={
            <h2 className="display-lg text-metal mt-4 [text-wrap:balance]">
              A website opens the door.
              <span className="serif-accent block text-bone">
                Software walks the business through it.
              </span>
            </h2>
          }
          blurb={
            <>
              NONAME builds both — the pages that promise, and the products
              that deliver. Most of the value your customers feel comes from
              the second one.
            </>
          }
        />
      </div>

      <p className="absolute bottom-4 left-6 hidden font-mono text-[10px] tracking-[0.14em] text-faint/70 md:block">
        {STATEMENT_VIDEO.credit}
      </p>
      <p className="absolute bottom-4 right-6 hidden font-mono text-[10px] tracking-[0.14em] text-faint/70 md:block">
        field recording · the work behind the work
      </p>
    </section>
  );
}
