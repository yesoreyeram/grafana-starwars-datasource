import { DataSourcePlugin } from '@grafana/data';
import { StarWarsDatasource } from './datasource';
import { StarWarsQueryEditor } from './QueryEditor';
import { StarWarsConfigEditor } from './ConfigEditor';

export const plugin = new DataSourcePlugin(StarWarsDatasource)
  .setQueryEditor(StarWarsQueryEditor)
  .setConfigEditor(StarWarsConfigEditor);
