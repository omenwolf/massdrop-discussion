import React, { Component } from 'react'
import './stylesheet/style.css';
import './stylesheet/iconFonts.css';
import './stylesheet/index.css';
import './Reply.jsx'

export class Discussion extends Component {
  render() {
    return (
        <div name="comment-1634590">
            <div class="comment__wrapper comment--root comment--employee">
                <div class="content_card comment">
                    <a href="/profile/richardgao" class="links links--normal links--with_text links--text_only avatar__wrapper_link--root">
                    <div class="avatar__wrapper comment_owner__avatar--large">
                        <img alt="" class="responsive responsive_avatar" src="https://massdrop-s3.imgix.net/img_profile/3tX74Z6S1Kr9zsnBF2CK_IMG_0418.JPG?auto=format&amp;fm=jpg&amp;fit=crop&amp;w=40&amp;h=40&amp;dpr=1" srcset="https://massdrop-s3.imgix.net/img_profile/3tX74Z6S1Kr9zsnBF2CK_IMG_0418.JPG?auto=format&amp;fm=jpg&amp;fit=crop&amp;w=40&amp;h=40&amp;dpr=1 1x, https://massdrop-s3.imgix.net/img_profile/3tX74Z6S1Kr9zsnBF2CK_IMG_0418.JPG?auto=format&amp;fm=jpg&amp;fit=crop&amp;w=40&amp;h=40&amp;dpr=2 2x, https://massdrop-s3.imgix.net/img_profile/3tX74Z6S1Kr9zsnBF2CK_IMG_0418.JPG?auto=format&amp;fm=jpg&amp;fit=crop&amp;w=40&amp;h=40&amp;dpr=3 3x" />
                    </div>
                    </a>
                    <div class="comment__main">
                        <div class="flexItem flexContainer wd_alignItems--center d_alignItems--center wt_alignItems--center nt_alignItems--center p_alignItems--center wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap row--comment_header">
                            <div class="flexItem flexContainer user user--link user--all user--employee comment__owner_details">
                                {/* <a href="/profile/richardgao" class="links links--normal links--with_text links--text_only"></a>      */}
                            <div class="flexItem">
                            <div class="flexItem flexContainer wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap user__info--main">
                                <div class="flexItem wd_flexGrow--0 d_flexGrow--0 wt_flexGrow--0 nt_flexGrow--0 p_flexGrow--0 username__container">
                                                                <a href="/profile/richardgao" class="links links--normal links--with_text links--text_only username">
                                                                <span class="links__text">richardgao</span>
                                                                </a>
                                                            </div>
                                                            <span class="tag user__endorsements">829</span>
                                                            <button type="button" class="follow_button button button--small button--blue button--bare">
                                                             <i class="icon icon-follow"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="comment__misc_info_actions">
                                                    <time class="timestamp comment__timestamp" datetime="2017-03-23T23:55:35.000Z" title="2017-03-23T23:55:35.000Z">2y</time>
                                                </div>
                                            </div>
                                            <div class="comment__display">
                                                <div class="row--comment__body comment__body">
                                                    <div class="rich_content__container">
                                                        <span class="">Is the PC37X open-back or closed-back? The PC37X is an open-back headset. </span>
                                                    </div>
                                                </div>
                                                <d class="row--comment__footer">
                                                <footer class="comment__footer">
                                                    <span class="links links--action links--with_text endorsement__icon">
                                                        <i class="icon material-icons material-icon--thumb_up endorsement__icon">thumb_up</i>
                                                        <span class="links__text valign_with_icon">0</span>
                                                    </span>
                                                    <span class="links links--action links--with_text comment__reply">
                                                        <i class="icon material-icons material-icon--reply comment__reply">reply</i>
                                                        <span class="links__text valign_with_icon">Reply</span>
                                                    </span>
                                                    <div class="comment__footer--right">
                                                        <div class="menu social_sharing_icon__menu">
                                                            <div class="menu__toggle">
                                                                <span>
                                                                    <i class="icon material-icons material-icon--share social_sharing_icon__icon">share</i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="tooltip__toggle favorites__tooltip">
                                                            <span class="links links--action links--with_text links--text_only favorite favorite--link favorite--bookmark">
                                                                <span class="links__text">
                                                                    <i class="icon material-icons material-icon--bookmark_border">bookmark_border</i>
                                                                    <span class="valign_with_icon">Save</span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div class="menu comment__menu_actions">
                                                            <div class="menu__toggle">
                                                                <i class="icon material-icons material-icon--more_vert">more_vert</i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </footer>
                                                </d>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

    )
  }
}

export default Discussion; 
