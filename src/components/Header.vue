<template>
  <header>
    <div class="container text-center">
      <h1>
        <font-awesome-icon icon="building" size="1x" />Localizador de Empresas
      </h1>
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="sass" scoped>
  header
    height: 235px
    background: #f6f6f6
    padding-top: 35px
    @media (max-width: $mobile)
      height: 360px
    h1
      color: $color
      font-size: $font-size-title
      font-weight: 400
      letter-spacing: 1.2px
      margin-bottom: 35px
      svg
        width: 25px
        margin-right: 25px

      @media (max-width: $mobile)
        font-size: $font-size-title / 1.8
        text-align: center
        svg
          display: block
          margin-bottom: 15px
          width: 100% !important
      @media (min-width: $tablet)
        font-size: $font-size-title / 1.2
      @media (min-width: $desktop)
        font-size: $font-size-title
      @media (min-width: $widscreen)
        font-size: $font-size-title


</style>
