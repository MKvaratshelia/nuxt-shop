<script setup lang="ts">
import IconLogo from "./icon/IconLogo.vue";
</script>

<template>
    <div class="header">
        <NuxtLink to="/">
            <IconLogo />
        </NuxtLink>
        <div class="header__content">
            <div class="header__menu">
                <NuxtLink to="/catalog">Магазин</NuxtLink>
                <NuxtLink to="/about">О нас</NuxtLink>
            </div>
            <div class="header__hr"></div>
            <div class="header__icons">
                <NuxtLink to="#">
                    <Icon
                        name="icons:search"
                        size="21px"
                    />
                </NuxtLink>
                <NuxtLink to="/cart">
                    <Icon
                        name="icons:cart"
                        size="21px"
                    />
                </NuxtLink>
                <NuxtLink to="/favorites">
                    <Icon
                        name="icons:favorite"
                        size="21px"
                    />
                </NuxtLink>
                <NuxtLink to="/account">
                    <Icon
                        name="icons:user"
                        size="21px"
                    />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header {
    padding: 0 16px;
    margin: 0 auto;
    max-width: 1248px;
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
    border-bottom: 1px solid var(--color-gray);

    &__content {
        display: flex;
        gap: 60px;
        align-items: center;
    }

    &__menu {
        display: flex;
        gap: 60px;
        align-items: center;
    }
}

/* .header__content {
    display: flex;
    gap: 60px;
    align-items: center;
}

.header__menu {
    display: flex;
    gap: 60px;
    align-items: center;
} */

.header__menu a {
    font-size: 16px;
    line-height: 27px;
    color: var(--color-black);
    text-decoration: none;
    padding-bottom: 48px;
}

.header__menu a:hover {
    color: var(--color-dark-gray);
}

.header__menu a.router-link-active {
    border-bottom: 1px solid var(--color-black);
}

.header__icons {
    display: flex;
    gap: 40px;
    align-items: center;
}

.header__icons a {
    padding-bottom: 48px;
}

.header__icons a.router-link-active {
    border-bottom: 1px solid var(--color-black);
}

.header__hr {
    border-left: 1px solid var(--color-dark-gray);
    height: 17px;
    align-self: flex-start;
    margin-top: 4px;
}
</style>
