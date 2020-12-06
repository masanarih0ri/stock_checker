<template>
  <div>
    <h1 v-if="error.statusCode === 404">指定されたページは見つかりませんでした。</h1>
    <h1 v-else>エラーが発生しました。</h1>
    <nuxt-link to="/">トップページへ戻る</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: { type: Object, default () { return {} } }
  }
}
</script>