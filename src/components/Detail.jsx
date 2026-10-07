import { Link, useParams } from "react-router";
import NotFound from "./NotFound";

function Detail() {
  const { id } = useParams();
  let detail;

  if (id === "1") {
    detail =
      "Untuk mendaftar, pilih tombol Sign In dan ikuti petunjuk pembuatan akun. Pastikan alamat email yang digunakan masih aktif.";
  } else if (id === "2") {
    detail =
      "Pembayaran dapat dilakukan menggunakan transfer bank, kartu debit, atau dompet digital yang tersedia pada halaman pembayaran.";
  } else if (id === "3") {
    detail =
      "Permintaan pengembalian dana dapat diajukan melalui pusat bantuan dengan menyertakan nomor transaksi dan alasan pengajuan.";
  } else {
    return <NotFound />;
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-8">
      <Link
        className="mb-6 inline-flex items-center text-sm text-neutral-500 hover:text-neutral-900"
        to="/"
      >
        ← Kembali ke HOME
      </Link>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
        <p className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-neutral-200 text-base font-semibold text-neutral-900">
          {id}
        </p>
        <p className="mb-1.5 text-sm">Detail Pertanyaan</p>
        <h1 className="text-2xl font-semibold tracking-tight md:text-[28px]">
          Detail HOME - ID: {id}
        </h1>
        <p className="my-5 text-base leading-relaxed text-neutral-500">
          Ini adalah halaman detail untuk HOME dengan ID: <strong>{id}</strong>.
        </p>
        <hr className="mb-5 border-neutral-200" />
        <p className="mb-6 rounded-xl bg-neutral-100 p-4 text-sm leading-relaxed text-neutral-600">
          {detail}
        </p>
        <Link
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
          to="/"
        >
          Kembali ke HOME
        </Link>
      </div>
    </section>
  );
}

export default Detail;
