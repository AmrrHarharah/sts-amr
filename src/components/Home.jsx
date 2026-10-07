import { Link } from "react-router";

function Home() {
  return (
    <section className="p-6 md:p-8">
      <div className="mb-8">
        <p className="mb-2 text-sm">Pusat Bantuan</p>
        <h1 className="text-2xl font-semibold md:text-[28px]">
          Pertanyaan Umum
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Temukan jawaban dari pertanyaan yang sering ditanyakan
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Link
          className="flex flex-col items-start rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          to="/home/1"
        >
          <span className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-neutral-200 text-sm font-semibold text-neutral-900">
            1
          </span>
          <h2 className="text-base font-semibold">Cara Mendaftar Akun</h2>
          <p className="mt-[11px] text-sm leading-relaxed text-neutral-500">
            Petunjuk langkah demi langkah mendaftar.
          </p>
          <span className="mt-5 text-[13px]">Lihat detail →</span>
        </Link>

        <Link
          className="flex min-h-48 flex-col items-start rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          to="/home/2"
        >
          <span className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-neutral-200 text-sm font-semibold text-neutral-900">
            2
          </span>
          <h2 className="text-base font-semibold">Metode Pembayaran</h2>
          <p className="mt-[11px] text-sm text-neutral-500">
            Daftar metode pembayaran yang didukung.
          </p>
          <span className="mt-5 text-[13px]">Lihat detail →</span>
        </Link>

        <Link
          className="flex min-h-48 flex-col items-start rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          to="/home/3"
        >
          <span className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-neutral-200 text-sm font-semibold">
            3
          </span>
          <h2 className="text-base font-semibold">Kebijakan Pengembalian</h2>
          <p className="mt-[11px] text-sm text-neutral-500">
            Syarat dan ketentuan refund.
          </p>
          <span className="mt-5 text-[13px]">Lihat detail →</span>
        </Link>
      </div>
    </section>
  );
}

export default Home;
