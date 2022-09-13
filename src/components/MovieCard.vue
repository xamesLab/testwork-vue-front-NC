<template>
    <article class="movie-card">
      <div class="movie-card__poster">
        <!-- <img :src="'http://www.kinopoisk.ru/images/film_big/602829.jpg'" alt=""> -->
        <img :src="posterUrl" alt="">
      </div>
      <div class="movie-card__content">
        <h1 class="movie-card__title">
          <router-link :to="{ name: 'detail', params: { id: item.id } }">{{ this.item.title }}</router-link>
        </h1>
        <ul class="movie-card__info">
          <li class="movie-card__item">
            {{this.item.year}}, {{ this.genres }}
          </li>
          <li class="movie-card__item" v-if="this.item.directors">
            Режиссёр: {{ this.directors }}
          </li>
          <li class="movie-card__item" v-if="this.item.actors">
            Актеры: <span class="movie-card__actors">{{ this.actors }}</span>
          </li>
        </ul>
        <div class="movie-card__description" v-if="this.item.description">
          <p>{{ this.item.description }}</p>
        </div>
        <span class="movie-card__time" v-if="this.item.collapse.duration">
          {{ this.duration }}
        </span>
      </div>
    </article>
  </template>
  
  <script>
    import { POSTER_URL } from '@/constants'
  export default {
    name: 'MovieCard',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    data(){
        return {
            POSTER_URL
        }
    },
    computed: {
        posterUrl (){
            return `http://www.kinopoisk.ru/images/film_big/368539.jpg`
        },
      genres () {
        return this.item.genres ? this.item.genres.join(', ') : ''
      },
      directors () {
        return this.item.directors.join(', ')
      },
      actors () {
        return this.item.actors.join(', ')
      },
      duration () {
        return this.item.collapse.duration[0]
      }
    }
  }
  </script>
<style scoped>
.movie-card {
    display: flex;
    background-color: var(--second-bg-color);
    box-shadow: 0 4px 4px rgba(#000, 0.25);
    margin-bottom: 24px;
}

.movie-card__poster {
    display: flex;
    align-items: center;
    width: 168px;
    padding: 0 28px ;
    background-color: var(--grey-bg-color);
    flex-shrink: 0;
}

.movie-card__poster img {
    width: 100%;
}

.movie-card__content {
    padding: 32px 32px 32px 24px;
    position: relative;
    overflow: hidden;
}

.movie-card__title {
    margin-bottom: 12px;
    font-size: 2.25rem;
    line-height: 1;
}

.movie-card__info {
    margin-bottom: 14px;
    font-weight: 700;
}

.movie-card__item {
    margin-bottom: 8px;
    font-size: 12px;
    text-transform: uppercase;
}

.movie-card__item:last-child {
      margin-bottom: 0;
}

.movie-card__actors {
    text-transform: initial;
    color: var(--grey-bg-color);
}

.movie-card__time {
    position: absolute;
    top: 32px;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 9px 28px 6px 18px;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    color: #000;
}
.movie-card__time::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 110%;
      height: 100%;
      background-color: var(--grey-bg-color);
      transform: skew(-10deg);
    }
    
    .movie-card__time    svg {
      margin-left: 12px;
    }
</style>