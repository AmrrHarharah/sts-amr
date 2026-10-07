import { Link } from "react-router";

function NotFound() {
  return (
    <section className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <div className="mb-8 text-6xl font-bold text-neutral-900">404</div>
      <div>
        <p className="mb-2 text-sm text-neutral-500">Lost somewhere?</p>
        <h1 className="text-2xl font-semibold">
          Halaman ini tidak ditemukan.
        </h1>
        <p className="mx-auto mt-3 max-w-[450px] text-sm text-neutral-500">
          Sepertinya halaman yang Anda cari sedang tersesat, dipindahkan, atau
          memang belum pernah ada.
        </p>
      </div>
      <div className="mt-[26px] flex items-center justify-center gap-3">
        <Link
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
          to="/"
        >
          ← Kembali ke Home
        </Link>
        <Link
          className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm hover:bg-neutral-100"
          to="/"
        >
          Pusat Bantuan
        </Link>
      </div>
      <p className="mt-12 text-xs text-neutral-400">Error 404</p>
    </section>
  );
}

export default NotFound;
