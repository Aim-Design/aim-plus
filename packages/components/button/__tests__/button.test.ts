import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import AimButton from '../index';
// The component slot test
describe('test button', () => {
  it('should render slot', () => {
    const wrapper = mount(AimButton, {
      slots: {
        default: 'button'
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('button');
  });

  it('should have class', () => {
    const wrapper = mount(AimButton, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('aim-button--primary');
  });
});
