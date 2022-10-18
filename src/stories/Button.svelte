<script>
  import './button.css';
  import { createEventDispatcher } from 'svelte';

  //import { goto } from '$app/navigation'



  import { PUBLIC_TAG, PUBLIC_BUILDTIMESTAMP } from '$env/static/public'

  import { env } from '$env/dynamic/public'

    export const variables = {
      tag: PUBLIC_TAG,
      prodBuild: PUBLIC_TAG.match(/^(\d{1,3}.\d{1,3}.\d{1,3})$/),
      buildTimeStamp: PUBLIC_BUILDTIMESTAMP,
      baseUrl: env.PUBLIC_BASE_URL,
      apiUrl: env.PUBLIC_API_URL,
    }
  console.log(variables)
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * What background color to use
   */
  export let backgroundColor;
  /**
   * How large should the button be?
   */
  export let size = 'medium';
  /**
   * Button contents
   */
  export let label = '';

  let mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  let style = backgroundColor ? `background-color: ${backgroundColor}` : '';

  const dispatch = createEventDispatcher();

  /**
   * Optional click handler
   */
  export let onClick = async (event) => {
    dispatch('click', event);
    //await goto('/login')
  };
</script>

<button
  type="button"
  class={['storybook-button', `storybook-button--${size}`, mode, 'ring-red-500', 'ring'].join(' ')}
  {style}
  on:click={onClick}
>
  {label}
</button>
