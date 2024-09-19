export interface User {
    id: number;
    name: string;
    nik: string;
    email: string;
    email_verified_at?: string;
    karyawan: {
        nama: string;
        suskel: string;
        ptkp: string;
        kode_unit: string;
        sub_unit: string;
        egrup: string;
        esubgrup: string;
        jabatan: string;
        jenkel: string;
        tanggal_masuk: string;
        tanggal_lahir: string;
        unit_usaha: {
            nama_unit: string;
            kode_unit: any;
        };
    };
    is_spi: boolean;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
