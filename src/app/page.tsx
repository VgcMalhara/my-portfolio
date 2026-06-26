import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

export default function Home() {
  return (
    <main>

      <section className="py-32">

        <Container>

          <SectionTitle
            subtitle="WELCOME"
            title="Building Beautiful Software."
          />

        </Container>

      </section>

    </main>
  );
}