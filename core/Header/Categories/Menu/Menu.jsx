import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import { Router } from '../../../../routes';

import {
  Wrapper,
  Item,
  LinkText,
  Text,
  ItemBlock,
  ImageWrapper,
  MenuWrapper,
} from './Menu.styles';
import { BigLink } from '../../../../components/BigLink';
import { SmallLink } from '../../../../components/SmallLink';

@observer
class Menu extends Component {
  @observable isActiveMenu = false;

  @action
  onMouseChange = value => {
    const { data } = this.props;
    if (data) {
      this.isActiveMenu = value;
    }
  };

  handleClickMenu = params => {
    Router.pushRoute(params);
    this.onMouseChange(false);
  };

  imageRender = () => {
    return (
      <ImageWrapper>
        <img src="/static/mens.jpg" alt="new" />
      </ImageWrapper>
    );
  };

  render() {
    const { data, name } = this.props;
    return (
      <MenuWrapper
        onMouseEnter={() => this.onMouseChange(true)}
        onMouseLeave={() => this.onMouseChange(false)}
      >
        <ItemBlock isActiveMenu={this.isActiveMenu}>{name}</ItemBlock>
        {this.isActiveMenu && data && data.length !== 0 ? (
          <Wrapper>
            <Item>
              {data.allLink &&
                data.allLink.map(({ id, name }) => (
                  <LinkText
                    key={id}
                    onClick={() => this.handleClickMenu(`/collections/${id}`)}
                  >
                    <BigLink key={id}>{name}</BigLink>
                  </LinkText>
                ))}
            </Item>
            <Item>
              <Text>Товары по категориям</Text>
              {data.category &&
                data.category.map(({ id, name }) => (
                  <LinkText
                    key={id}
                    onClick={() => this.handleClickMenu(`/collections/${id}`)}
                  >
                    <SmallLink>{name}</SmallLink>
                  </LinkText>
                ))}
            </Item>
            <Item>
              <Text>Товары по коллекциям</Text>
              {data.collection &&
                data.collection.map(({ id, name }) => (
                  <LinkText
                    key={id}
                    onClick={() => this.handleClickMenu(`/collections/${id}`)}
                  >
                    <SmallLink>{name}</SmallLink>
                  </LinkText>
                ))}
            </Item>
            {this.imageRender()}
          </Wrapper>
        ) : null}
      </MenuWrapper>
    );
  }
}

export default Menu;
