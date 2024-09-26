export const PROFILES = [
    { imageArtist: "./Images/Artists/descarga.jpeg", nameAlbum: 'Meddle',imageAlbum: "/Images/Albums/Meddle.jpg", nameArtist: 'Pink Floyd', year:1971, durationTot:50,cantSong:9,nameSong: 'Echoes', nroTrack:9, duration: 22, lyrics:'', gener:'rock', info: 'string' },
    { imageArtist: "/Images/Artists/images.jpeg",nameAlbum: 'A mi me gusta', imageAlbum:"/Images/Albums/R_2153374_1332832997.jpg", nameArtist: 'Los del Río', year:1995,durationTot:40,cantSong:12,nameSong: 'Macarena',nroTrack:1,duration: 4, lyrics: '', gener: 'pop', info: 'string'},
    { nameSong: 'I was made for lovin you', nameArtist: 'Kiss', imageArtist:"/Images/Artists/Kiss_CoverLEB.png",nameAlbum: 'Dynasty', imageAlbum:"/Images/Albums/Dynasty_album_cover.jpg",duration: 4, lyrics: '', gener: 'rock', info: 'string' },
    { nameSong: 'Parrandero', nameArtist: 'Los Palmeras', imageArtist:"/Images/Artists/los_palmeras.jpg",nameAlbum: 'Un toque diferente', imageAlbum:"/Images/Albums/Los_Palmeras-Un_Toque_Diferente_Frontal.jpg",duration: 3, lyrics: '', gener: 'cumbia', info: 'string' },
    { nameSong: 'Domino dancing', nameArtist: 'Pet Shop Boys', imageArtist:"/Images/Artists/foto_1_2.jpg",nameAlbum: 'Introspective', imageAlbum:"/Images/Albums/Introspective_Pet_Shop_Boys_album.jpg",duration: 5, lyrics: '', gener: 'synth pop', info: 'string' },
  ];
export type Props = {
  imageArtist: string;
  nameAlbum: string;
  imageAlbum: string;
  nameArtist: string;
  year?: number;
  durationTot?:number;
  cantSong?:number;
  nameSong: string;
  nroTrack?:number;
  duration: number;
  lyrics: string;
  gener: string;
  info: string;
};
