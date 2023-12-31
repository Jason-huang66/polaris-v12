import React from 'react';
import type {ComponentMeta} from '@storybook/react';
import {Button, PageActions} from '@shopify/polaris';

export default {
  component: PageActions,
} as ComponentMeta<typeof PageActions>;

export function Default() {
  return (
    <PageActions
      primaryAction={{
        content: 'Save',
      }}
      secondaryActions={[
        {
          content: 'Delete',
          destructive: true,
        },
      ]}
    />
  );
}

export function PrimaryActionOnly() {
  return (
    <PageActions
      primaryAction={{
        content: 'Save',
      }}
    />
  );
}

export function WithCustomPrimaryAction() {
  return (
    <PageActions
      primaryAction={<Button variant="primary">Save</Button>}
      secondaryActions={[
        {
          content: 'Delete',
          destructive: true,
        },
      ]}
    />
  );
}

export function WithCustomSecondaryAction() {
  return (
    <PageActions
      primaryAction={{
        content: 'Save',
      }}
      secondaryActions={<Button>Save</Button>}
    />
  );
}
