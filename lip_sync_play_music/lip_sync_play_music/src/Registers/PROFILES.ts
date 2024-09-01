export const PROFILES = [
    { imageArtist: "./Images/Artists/descarga.jpeg", nameSong: 'Echoes', nameArtist: 'Pink Floyd', nameAlbum: 'Meddle', imageAlbum: "/Images/Albums/Meddle.jpg",duration: 22, lyrics:'', gener:'rock', info: 'string' },
    { nameSong: 'Macarena', nameArtist: 'Los del Río', imageArtist: "/Images/Artists/images.jpeg",nameAlbum: 'A mi me gusta', imageAlbum:"/Images/Albums/R_2153374_1332832997.jpg",duration: 4, lyrics: '', gener: 'pop', info: 'string'},
    { nameSong: 'I was made for lovin you', nameArtist: 'Kiss', imageArtist:"/Images/Artists/Kiss_CoverLEB.png",nameAlbum: 'Dynasty', imageAlbum:"/Images/Albums/Dynasty_album_cover.jpg",duration: 4, lyrics: '', gener: 'rock', info: 'string' },
    { nameSong: 'Parrandero', nameArtist: 'Los Palmeras', imageArtist:"/Images/Artists/los_palmeras.jpg",nameAlbum: 'Un toque diferente', imageAlbum:"/Images/Albums/Los_Palmeras-Un_Toque_Diferente_Frontal.jpg",duration: 3, lyrics: '', gener: 'cumbia', info: 'string' },
    { nameSong: 'Domino dancing', nameArtist: 'Pet Shop Boys', imageArtist:"/Images/Artists/foto_1_2.jpg",nameAlbum: 'Introspective', imageAlbum:"/Images/Albums/Introspective_Pet_Shop_Boys_album.jpg",duration: 5, lyrics: '', gener: 'synth pop', info: 'string' },
  ];
export type Props = {
  imageArtist: string;
  nameSong: string;
  nameArtist: string;
  nameAlbum: string;
  imageAlbum: string;
  duration: number;
  lyrics: string;
  gener: string;
  info: string;
};
